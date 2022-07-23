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
    <div className=" text-xl pt-6 pl-2 text-center font-serif bg-center  border-l-4 border-cyan-500 ">
      <h1 className="">Id:{data.id}</h1>
      <h1 className="hover:text-cyan-600 mb-8 text-2xl" >{data.title}</h1>
      <p>{data.body}</p>
    </div>
  )
};
export default Post;
