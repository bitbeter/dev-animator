const Y = 60;

const applyStep = (index: number) => index * 1.2 + 50

export const virtualBoxes = [
    {
        "key": "0",
        "x": applyStep(10),
        "y": Y
    },
    {
        "key": "1",
        "x": applyStep(40),
        "y": Y
    },
    {
        "key": "2",
        "x": applyStep(70),
        "y": Y
    },
    {
        "key": "3",
        "x": applyStep(100),
        "y": Y
    },
    {
        "key": "4",
        "x": applyStep(130),
        "y": Y
    },
    {
        "key": "5",
        "x": applyStep(160),
        "y": Y
    },
    {
        "key": "6",
        "x": applyStep(190),
        "y": Y
    },
    {
        "key": "7",
        "x": applyStep(220),
        "y": Y
    },
    {
        "key": "8",
        "x": applyStep(250),
        "y": Y
    },
    {
        "key": "9",
        "x": applyStep(280),
        "y": Y
    }
];