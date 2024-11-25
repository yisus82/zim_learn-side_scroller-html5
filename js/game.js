const ready = () => {
  new Physics().drag();

  const olive = new Circle({
    radius: 60,
    color: new RadialColor([green.darken(0.3), 'olive']),
  })
    .center()
    .addPhysics({
      bounciness: 0.5,
    });
  new Circle({
    radius: 20,
    color: black,
  })
    .alp(0.6)
    .center(olive)
    .mov(25);
};

new Frame({
  scaling: FIT,
  width: 1024,
  height: 768,
  color: light,
  outerColor: dark,
  ready,
});
