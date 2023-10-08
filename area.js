// This function calculate triangle area 
function calculateTriangle(){
    const base = getElement('base-input');
    const height = getElement('height-input');
    
    inputValidation(base,height);

    const area = 0.5 * base * height;

    setElement('t-area', area); 
    addToCalculateEntry('Triangle', area);
}
// This function calculate Rectangle area
function calculateRectangle(){
    const width = getElement('w-input');
    const length = getElement('l-input');

    inputValidation(width, length);

    const area = width * length;

    addToCalculateEntry('Rectangle', area);
}
// This function calculate Parallelogram area
function calculatePalallelogram(){
    const base = getElement('p-base');
    const height = getElement('p-height');

    inputValidation(base, height);

    const area = height * base;

    setElement('p-area', area);
    addToCalculateEntry('Parallelogram', area);
}
// This function calculate Rhombus
function calculateRhombus(){
    const d1 = getElement('d1-input');
    const d2 = getElement('d2-input');

    inputValidation(d1,d1);

    const area = 0.5 * d1 * d2;

    setElement('d-area', area);
    addToCalculateEntry('Rhombus', area);
}
// This function calculate Ellipse
function calculateEllipse(){
    const majorRadius = getElement('e-input1');
    const minorRadius = getElement('e-input2');

    inputValidation(majorRadius, minorRadius);

    const totalRadius = 3.14 * majorRadius * minorRadius;
    const total = totalRadius.toFixed(2);

    setElement('e-area', total);
    addToCalculateEntry('Ellipse', total);
}
// This function calculate Pentagon
function calculatePentagon(){
    const periMeter = getElement('pentagon-p-input');
    const base = getElement('pentagon-b-input');

    inputValidation(periMeter, base);

    const area = 0.5 * periMeter * base;

    setElement('pentagon-area', area);
    addToCalculateEntry('Pentagon', area);
}