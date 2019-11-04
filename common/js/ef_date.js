jQuery(document).ready(function($) {
  var dateTimePicks = $(".date-time-pick");

  dateTimePicks.each(function() {
    var $dTP = $(this);

    $dTP.datetimepicker({
      dateFormat: "M dd yy",
      firstDay: ef_week_first_day,
      alwaysSetTime: false,
      controlType: "select",
      altField: '#' + $dTP.attr("id") + "_hidden",
      altFieldTimeOnly: false,
      altFormat: "yy-mm-dd",
      altTimeFormat: "HH:mm"
    });
  });

  $(".date-pick").datepicker({
    dateFormat: "M dd yy",
    firstDay: ef_week_first_day
  });
});
