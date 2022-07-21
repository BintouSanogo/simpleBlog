import { useRouter } from "next/router";
import { api } from "../../api/postApi";

//getStaticspaths
export const getStaticPaths = async () => {
  const res = api.get("/posts");
  const data = (await res).data;

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

//getStaticsProps
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await api.get("http://jsonplaceholder.typicode.com/posts/" + id);
  const data = res.data;

  return {
    props: { data },
  };
};


const Post = ({ data }) => {
  const router = useRouter();
  const { id} = router.query;
  return(
    <div>
      <h1>Id:{data.id}</h1>
      <h1>Title:{data.title}</h1>
      <p>Body:{data.body}</p>
    </div>
  )
};
export default Post;
