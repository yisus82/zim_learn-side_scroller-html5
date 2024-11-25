const ready = () => {
  const physics = new Physics().drag();

  const olive = new Circle().center().addPhysics();
};

new Frame({
  scaling: FIT,
  width: 1024,
  height: 768,
  color: light,
  outerColor: dark,
  ready,
});
