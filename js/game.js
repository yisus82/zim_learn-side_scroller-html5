const ready = () => {
  // We make a pattern for the background using the makePattern function from Pizzazz
  const background = makePattern({
    type: 'stripes',
    colors: series(blue, blue.lighten(0.2)),
    size: 50,
    rows: 35,
    cols: 200,
  })
    .alp(0.4)
    .pos(0, 0)
    .noMouse();

  new Physics({
    gravity: 10,
    borders: new Boundary({
      x: 0,
      y: 0,
      width: background.width,
      height: H,
    }),
    scroll: true,
  });

  // Tree
  // Trunk
  new Rectangle({
    width: 100,
    height: 500,
    color: brown,
  })
    // Center the registration point (default for rectangles is top-left)
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

  // Olive
  const olive = new Circle({
    radius: 60,
    color: new RadialColor([green.darken(0.3), 'olive']),
  })
    .loc(160, 290)
    .addPhysics({
      density: 0.6,
    })
    // Move only horizontally
    .follow({
      vertical: false,
    });
  new Circle({
    radius: 20,
    color: black,
  })
    .alp(0.6)
    .center(olive)
    .mov(25);

  // Start message
  new Pane({
    content: new Label({
      text: "Gentlemen are Enjoying a Day in the Park. Oh, it's a Lost Olive!",
      color: yellow,
      size: 30,
      variant: true,
    }).noMouse(),
    backgroundColor: black,
    width: W,
    corner: 0,
  }).show(() => {
    olive.control({
      speed: 50,
    });
  });

  // Hat
  const hatPoints = [
    [-100, -100, 0, 0, 0, 0, 0, 0, 'none'],
    [-50.2, -107.1, 0, 0, -25, 1.4, 13.6, -0.8, 'mirror'],
    [3.5, -109.1, 0, 0, -21, -0.1, 17.5, 0.1, 'mirror'],
    [58.3, -105, 0, 0, -11, -1.3, 24.3, 2.9, 'mirror'],
    [100, -100, 0, 0, 0, 0, 0, 0, 'none'],
    [67.8, 100, 0, 0, 0, 0, 0, 0, 'none'],
    [-72.8, 100, 0, 0, 0, 0, 0, 0, 'none'],
  ];
  new Blob({
    color: black,
    points: hatPoints,
    interactive: false,
  })
    .reg(CENTER)
    .sca(2)
    .pos(100, -200, CENTER, BOTTOM)
    .addPhysics({
      dynamic: false,
    });
};

// Create a new frame
new Frame({
  scaling: FIT,
  width: 1024,
  height: 768,
  color: light,
  outerColor: dark,
  ready,
});
