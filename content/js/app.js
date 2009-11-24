(function() {
    var Application = Components.classes["@mozilla.org/fuel/application;1"].getService(Components.interfaces.fuelIApplication);
    var a = Application.prefs.getValue("breakpad.reportURL", false);
    var search = function() {
        $.ajax({
            type: "POST",
            url: "http://www.2552.com.cn/Book/Search.aspx",
            data: {
                SearchKey: $(this).find("input").val(),
                SearchClass: "1"
            },
            success: function(data) {
                $("div#content").html($(data).find(".borBottom"));
            }
        });
    }
    $(document).ready(function() {
        $("form#search").submit(search);
    });
})();

/* vim: set ts=4 sw=4 expandtab ai: */
