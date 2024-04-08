import React, { useEffect, forwardRef } from "react";

const Bienvenue = forwardRef((props, ref) => {
  useEffect(() => {
    console.log(
      `Position du composant Bienvenue : ${
        ref.current.getBoundingClientRect().top
      }`
    );
  }, []);

  return (
    <div ref={ref}>
      <h1>BIENVENUE !</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan
        pulvinar euismod. Duis et finibus ligula. Curabitur quis elit non quam
        iaculis consectetur. Aliquam ullamcorper augue ut tortor cursus, eu
        congue purus iaculis. Nullam ut luctus nisl. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam aliquet pellentesque velit, a ornare metus tincidunt a. Cras
        finibus turpis non condimentum faucibus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nam accumsan pulvinar euismod. Duis et
        finibus ligula. Curabitur quis elit non quam iaculis consectetur. - FIN
        DU PARAGRAPHE -
      </p>
    </div>
  );
});

export default Bienvenue;
