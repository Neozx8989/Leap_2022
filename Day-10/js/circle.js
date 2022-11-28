    var path = new Path();
    path.strokeColor = 'green';
    var start = new Point(100, 100);
    path.moveTo(start);
    path.lineTo(start + [ 150, -50 ]);

    var topLeft = new Point(250, 250);
    var rectSize = new Size(400, 100);

    var rect = new Rectangle(topLeft, rectSize);

    var path = new Path.Rectangle(rect, 5);

    path.fillColor = 'red';
    console.log(rect);
    console.log(rect.point);
    console.log(rect.size);
    rect.strokeColor = 'red';

    var rect = new Rectangle();
    rect.left = 100;
    rect.right = 200;
    rect.bottom = 700;
    rect.top = 200;
    console.log(rect);