import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

type ProuductProps = {
  product: any;
};

const Detail = ({ product }: ProuductProps) => {
  if (!product) return null;
  return <div> Product Detail : {product.name}</div>;
};

//get params
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`http://localhost:3001/products`)).json();
  const paths = data.map((item: any) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

//getData

export const getStaticProps: GetStaticProps<ProuductProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("GET statics props");
  console.log("context", context.params?.id);

  //call api
  const data = await (
    await fetch(`http://localhost:3001/products/${context.params?.id}`)
  ).json();
  console.log("finđata", data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
  };
};






export default Detail;
