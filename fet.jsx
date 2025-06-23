import React, {
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";

import ReactMarkdown from "react-markdown";

export const useIterator = (
  items = [],
  initialValue = 0
) => {
  const [i, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if(i === 0) return setIndex(items.length -1);
    setIndex(i - 1);
  },[i]);

  const next = useCallback(() => {
    if(i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  },[i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
}

function RepositoryReadme({ repo, login }){
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  const loadReadme = useCallback(async (login, repo) =>{
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then(res => res.json());
    const markdown = await fetch(download_url).then(res => res.text());
    setMarkdown(markdown);
    setLoading(false);
  },[]);
  
  useEffect(() => {
    if(!repo || !login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if(loading) return <p>Loading...</p>;

  return <ReactMarkdown source={markdown} />;
}

export default function RepoMenu({ repositories, login}) {
  const [{ name }, previous, next] = useIterator( repositories );

  return(
    <>
      <div style={{ display: "flex" }}>
        <button onClick= { previous }>&lt;</button>
        <p>{name}</p>
        <button onClick= { next }>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  )
}