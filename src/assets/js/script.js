@@include("../../../node_modules/nouislider/dist/nouislider.js");

//slider
const rangeSlider = document.getElementById("range-slider");

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [5000, 999999],
        connect: true,
        step: 2,
        range: {
            min: [5000],
            max: [999999],
        },
    });

    const input0 = document.getElementById("input-0");
    const input1 = document.getElementById("input-1");
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on("update", function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
        el.addEventListener("change", (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });
}
