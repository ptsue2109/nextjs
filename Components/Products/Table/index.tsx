import Link from "next/link";
import React from "react";

interface Props {}

const ProductTable = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>

    </div>

  );

};

export default ProductTable;
