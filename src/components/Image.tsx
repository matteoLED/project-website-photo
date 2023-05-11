import Image from "next/image";
import React from "react";
import styles from "../style/Image.module.css";
import style from "../style/Header.module.css";

function ImageAsset() {
  return (
    <div className={styles.img}>
      <Image
        src="/image.png"
        alt="Logo Charles Cantin"
        width={400}
        height={300}
      />
    </div>
  );
}

export default ImageAsset;
