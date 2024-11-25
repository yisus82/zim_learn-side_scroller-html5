const ready = () => {
  new Physics().drag();

  // Tree
  // Trunk
  new Rectangle({
    width: 100,
    height: 500,
    color: brown,
  })
    // Center the reg of physics objects (circles default center)
    .centerReg()
    .pos(0, 0, LEFT, BOTTOM)
    .addPhysics({
      dynamic: false,
    });
  // Leaves
  new Circle({
    radius: 300,
    color: green,
  }).loc(20, 267);
  // Leaves
  new Circle({
    radius: 250,
    color: green.darken(0.05),
  }).loc(19, 350);
  // Leaves
  new Circle({
    radius: 170,
    color: green.darken(0.2),
  }).loc(37, 433);
  // Leaves
  new Circle({
    radius: 150,
    color: green.darken(0.1),
  })
    .loc(200, 490)
    .addPhysics({
      dynamic: false,
    });

  const olive = new Circle({
    radius: 60,
    color: new RadialColor([green.darken(0.3), 'olive']),
  })
    .loc(160, 290)
    .addPhysics({
      density: 0.6,
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
