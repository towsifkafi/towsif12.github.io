var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            MouseConstraint = Matter.MouseConstraint,
            Svg = Matter.Svg,
            Vertices = Matter.Vertices,
            Common = Matter.Common,
            Mouse = Matter.Mouse;

        // create an engine
        var engine = Engine.create();

        // create a renderer
        let render = Render.create({
            element: document.getElementById('SIcons'),
            engine: engine,
            options: {
                width: 568,
                height: 297,
                showAngleIndicator: false,
                wireframes: false
            }
        });

        Composite.add(engine.world, [
            // walls
            Bodies.rectangle(285, 0, 568, 2, { isStatic: true }),
            Bodies.rectangle(285, 297, 568, 2, { isStatic: true }),
            Bodies.rectangle(568, 300, 2, 595, { isStatic: true }),
            Bodies.rectangle(0, 300, 2, 595, { isStatic: true })
        ]);

        // create two boxes and a ground
        var illustrator = Bodies.rectangle(400, 200, 80, 80, { 
            restitution: 0.9, angle: -Math.PI * 0.5,
            chamfer: { radius: 20 },
            render: {
                sprite: {
                    texture: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/adobe_illustrator_macos_bigsur_icon_190447.png',
                    xScale: 0.194,
                    yScale: 0.194
                }
            }
         });

        var photoshop = Bodies.rectangle(450, 50, 80, 80, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            chamfer: { radius: 20 },
            render: {
                sprite: {
                    texture: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/adobe_photoshop_macos_bigsur_icon_190436.png',
                    xScale: 0.194,
                    yScale: 0.194
                }
            }
        });

        var github = Bodies.circle(500, 50, 45, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            render: {
                sprite: {
                    texture: `./images/github.svg`,
                    xScale: 0.63,
                    yScale: 0.63
                }
            }
        })

        var ubuntu = Bodies.circle(500, 50, 45, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            render: {
                sprite: {
                    texture: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg`,
                    xScale: 0.63,
                    yScale: 0.63
                }
            }
        })

        var trello = Bodies.rectangle(450, 50, 80, 80, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            render: {
                sprite: {
                    texture: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
                    xScale: 0.54,
                    yScale: 0.54
                }
            }
        });

        var vscode = Bodies.rectangle(450, 50, 80, 80, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            chamfer: { radius: 20 },
            render: {
                sprite: {
                    texture: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_visual_studio_code_alt_macos_bigsur_icon_189953.png',
                    xScale: 0.194,
                    yScale: 0.194
                }
            }
        });

        var vstudio = Bodies.rectangle(450, 50, 80, 80, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            chamfer: { radius: 20 },
            render: {
                sprite: {
                    texture: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_visual_studio_code_insider_macos_bigsur_icon_189950.png',
                    xScale: 0.194,
                    yScale: 0.194
                }
            }
        });

        var minecraft = Bodies.rectangle(450, 50, 80, 80, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            chamfer: { radius: 5 },
            render: {
                sprite: {
                    texture: 'https://cdn.icon-icons.com/icons2/1381/PNG/512/minecraft_94415.png',
                    xScale: 0.18,
                    yScale: 0.18
                }
            }
        });

        var figma = Bodies.circle(500, 50, 45, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            render: {
                sprite: {
                    texture: `https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png`,
                    xScale: 0.18,
                    yScale: 0.18
                }
            }
        })

        var insomnia = Bodies.circle(500, 50, 45, {
            restitution: 0.9, angle: -Math.PI * 0.5,
            render: {
                sprite: {
                    texture: `https://cdn.icon-icons.com/icons2/1381/PNG/512/insomnia_94603.png`,
                    xScale: 0.19,
                    yScale: 0.19
                }
            }
        })

        // add all of the bodies to the world
        Composite.add(engine.world, [illustrator, photoshop, github, trello, ubuntu, vscode, vstudio, figma, insomnia, minecraft]);

        // run the renderer
        Render.run(render);

        // create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.mouse = mouse;

        // window.addEventListener('resize', () => { 
        //     render.bounds.max.x = window.innerWidth;
        //     render.bounds.max.y = window.innerHeight;
        //     render.options.width = window.innerWidth;
        //     render.options.height = window.innerHeight;
        //     render.canvas.width = window.innerWidth;
        //     render.canvas.height = window.innerHeight;
        // });