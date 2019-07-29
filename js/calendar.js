(function ($) {
    'use strict';

    $(function () {

        var tips = {
            eventRender: function (event, element) {
                if (event.imageurl) {
                    element.find("div.fc-content").prepend("<img src='" + event.imageurl + "' style='width: 100%'>");
                }
                element.qtip({
                    content: {
                        title: {text: event.title},
                        text: event.excerpt
                    },
                    style: {classes: 'qtip-blue'},
                    position: {
                        my: 'bottom center',
                        at: 'top center'
                    }
                });
            }
        };


        $('.wfea-calendar-img-cal.sametab').fullCalendar($.extend(WFEACalendarImg, tips));

        var newtab = {
            eventClick: function (event) {
                if (event.url) {
                    window.open(event.url);
                    return false;
                }
            }
        };

        $('.wfea-calendar-img-cal.newtab').fullCalendar($.extend(WFEACalendarImg, newtab));
    });

})(jQuery);