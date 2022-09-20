jQuery(document).ready(function () {
    var sheet = document.createElement('style'),
        $rangeInput = jQuery('.range input'),
        prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {
        console.log(el.value);
        var curVal = el.value,
            val = (curVal - 1) * 25,
            style = '';

        // Set active label
        jQuery('.range-labels li').removeClass('active selected');

        var curLabel = jQuery('.range-labels').find('li:nth-child(' + curVal + ')');

        curLabel.addClass('active selected');
        curLabel.prevAll().addClass('selected');

        // Change background gradient
        for (var i = 0; i < prefs.length; i++) {
            style += '.range {background: linear-gradient(to right, #9E72E5 0%, #9E72E5 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
            style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #9E72E5 0%, #9E72E5 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
        }

        return style;
    }

$rangeInput.on('input', function () {
    sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
    jQuery('.range-labels li').on('click', function () {
        var index = jQuery(this).index();

        $rangeInput.val(index + 1).trigger('input');

    });

});