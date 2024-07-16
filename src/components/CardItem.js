import React from "react";
import {
  AnimatedBlock,
  useAnimatedValue,
  useDrag,
  interpolate,
} from "react-ui-animate";

const styles = {
  card: {
    position: "absolute",
    backgroundColor: "white",
    width: 200,
    height: 300,
    left: 150,
    top: 90,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 6px 46px rgba(0,0,0,0.04)",
    userSelect: "none",
    cursor: "pointer",
    border: "1px solid #e1e1e1",
  },
};



function CardItem({ card, callBack, setDescription,setAnswer}) {



  const activeIndex = React.useRef(-1);
  const element = React.useRef(
    useAnimatedValue(0, {
      onRest: function ({ finished, value, ...rest }) {
        if (finished && value !== 0) {
          console.log("SWIPED AWAY", activeIndex, value, finished);
          const val = value === -500 ? false : true;
          callBack(card, val,);
          setDescription(card.description)
          // setAnswer(String(card.answer))
          // ppp(activeIndex,value)
        }
      },
    })
  );

  const scales = React.useRef(useAnimatedValue(1));
  console.log("ss", "sss");
  const bind = useDrag(function ({
    args: [currentIndex],
    down,
    movementX,
    distanceX,
    directionX,
  }) {
    activeIndex.current = currentIndex;
    element.current.value = down ? movementX : 0;
    scales.current.value = down ? 1.05 : 1;

    if (!down && distanceX > 50) {
      element.current.value = directionX * 500;
    }
  });




  return (
    <>
      <AnimatedBlock
        {...bind()}
        style={{
          ...styles.card,
          translateX: element.current.value,
          rotateZ: interpolate(
            element.current.value,
            [-200, 0, 200],
            [20, 0, -20],
            {
              extrapolate: "clamp",
            }
          ),
          scale: scales.current.value,
        }}>
        {card.text}
      </AnimatedBlock>
    </>
  );
}

export default CardItem;
