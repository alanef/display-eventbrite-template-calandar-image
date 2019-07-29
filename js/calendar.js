(function ($) {
    'use strict';

    $(function () {

        var tips = {
            eventRender: function (event, element) {
                if (event.imageurl) {
                    element.find("div.fc-content").prepend("<img src='" + event.imageurl +"' height='48'>");
                }
                element.qtip({
                    content: {
                        title: {text: event.title},
                        text: event.excerpt
                    },
                    style: { classes: 'qtip-blue' },
                    position: { my: 'bottom center',
                                at: 'top center'}
                });
            }
        };


        $('.wfea-calendar.sametab').fullCalendar($.extend(WFEACalendar, tips));

        var newtab = {
            eventClick: function (event) {
                if (event.url) {
                    window.open(event.url);
                    return false;
                }
            }
        };

        $('.wfea-calendar.newtab').fullCalendar($.extend(WFEACalendar, newtab));
    });

})(jQuery);