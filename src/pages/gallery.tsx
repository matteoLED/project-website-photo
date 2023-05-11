import React from "react";
import Image from "next/image";
import styles from "../style/Image.module.css";
import style from "../style/Header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Navbar from "@/components/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    width: "100%",
  },
  gridList: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
}));

function Gallery() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={style.header}>
        <h1> Gallery Photo</h1>
      </div>
      <div className={styles.gridImg}>
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {[
              { img: "/biche.jpg", title: "Image 1" },
              { img: "/loutre.jpg", title: "Image 2" },
              { img: "/mariage.webp", title: "Image 3" },
              { img: "/oiseau.webp", title: "Image 4" },
              { img: "/table.webp", title: "Image 5" },
              { img: "/chateau.jpg", title: "Image 6" },
            ].map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </>
  );
}
export default Gallery;
