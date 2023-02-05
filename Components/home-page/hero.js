import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/myBlogWebAppDp.jpeg"
          alt="the image showing soham"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Soham</h1>
      <p>
        I blog about Web development - especially frontend frameWork like
        Angular or React
      </p>
    </section>
  );
};

export default Hero;
