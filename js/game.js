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
    // Jump
    olive.contact(obj => {
      olive.ground = true;
    });

    // Olive's speed control
    olive.control({
      speed: 50,
    });

    // Keyboard events
    F.on('keydown', event => {
      if (olive.ground && (event.key === 'ArrowUp' || event.key === 'w' || event.key === ' ')) {
        olive.ground = false;
        olive.impulse(0, -100);
      }
    });

    // Start the animation
    pauseAnimate(false);
  });

  // Hats
  const hatPoints = [
    [-100, -100, 0, 0, 0, 0, 0, 0, 'none'],
    [-50.2, -107.1, 0, 0, -25, 1.4, 13.6, -0.8, 'mirror'],
    [3.5, -109.1, 0, 0, -21, -0.1, 17.5, 0.1, 'mirror'],
    [58.3, -105, 0, 0, -11, -1.3, 24.3, 2.9, 'mirror'],
    [100, -100, 0, 0, 0, 0, 0, 0, 'none'],
    [67.8, 100, 0, 0, 0, 0, 0, 0, 'none'],
    [-72.8, 100, 0, 0, 0, 0, 0, 0, 'none'],
  ];
  const hat = new Blob({
    color: black,
    points: hatPoints,
    interactive: false,
  })
    .reg(CENTER)
    .sca(2);
  const hats = new Tile({
    obj: hat,
    cols: 10,
    rows: 1,
    spacingH: 400,
  }).pos(600, -300, LEFT, BOTTOM);
  hats.loop(hat => {
    hat.addTo(S).addPhysics({
      dynamic: false,
    });
    hat.wiggler = new Rectangle()
      .reg(CENTER)
      .loc(hat)
      // With null it starts at current x
      .wiggle('x', null, 400, 600, 6, 12)
      // With null it starts at current y
      .wiggle('y', null, 10, 50, 0.5, 2)
      .wiggle('rotation', 0, 5, 10, 2, 10);
  }, true);

  // Disallow sleeping otherwise animated objects may pass through
  olive.body.SetSleepingAllowed(false);
  // Pause the hats' animation until the start message is closed
  pauseAnimate();

  // Ticker
  Ticker.add(() => {
    loop(hats.items, hat => {
      hat.body.loc(hat.wiggler.x, hat.wiggler.y).rot(hat.wiggler.rotation);
    });
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
