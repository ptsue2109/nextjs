import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CustomerHeader from "../Components/header";
import ProductTable from "../Components/Products/Table";
import styles from "../styles/Home.module.css";
import { Button } from 'primereact/button';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      <CustomerHeader></CustomerHeader>
      </Head>

      <ProductTable> </ProductTable>
      <Button label="Warning" className="p-button-warning" />
     
    </div>
  );
};

export default Home;
