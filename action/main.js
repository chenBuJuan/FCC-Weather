$(document).ready(function() {
    $("#btnIn").bind("click", function() {
        var sCity = $("#textIn").val();

        $("#in").css("display", "none");

        var ajax = $.ajax({
            url: "http://v.juhe.cn/weather/index",
            type: "get",
            data: "cityname=" + sCity + "&dtype=json&format=1&key=385337970bc3c3db7e402c4acfbf55f8",
            dataType: "jsonp",
            success: function(data) {
                if(data.result){
                    $("#out").css("display", "block");

                    var now = data.result.sk;
                    $("#nTemp").text(now.temp);
                    $("#nWindDir").text(now.wind_direction);
                    $("#nWindStr").text(now.wind_strength);
                    $("#nHumidity").text(now.humidity);
                    $("#nTime").text(now.time);

                    var today = data.result.today;
                    $("#tCity").text(today.city);
                    $("#tDate").text(today.date_y);
                    $("#tWeek").text(today.week);
                    $("#tTemp").text(today.temperature);
                    $("#tWeather").text(today.weather);
                    $("#tWind").text(today.wind);
                    $("#tDressing_index").text(today.dressing_index);
                    $("#tDressing_advice").text(today.dressing_advice);
                    $("#tUv_index").text(today.uv_index);
                    $("#tWash_index").text(today.wash_index);
                    $("#tTravel_index").text(today.travel_index);
                    $("#tExercise_index").text(today.exercise_index);
                    $("#tDrying_index").text(today.city);

                    $.each(data.result.future, function(key, value) {
                        var fCell = $("<table></table>");

                        $("<tr></tr>").append($("<td>日期：</td><td>" + value.date + "</td>")).appendTo(fCell);
                        $("<tr></tr>").append($("<td>星期：</td><td>" + value.week + "</td>")).appendTo(fCell);
                        $("<tr></tr>").append($("<td>天气：</td><td>" + value.weather + "</td>")).appendTo(fCell);
                        $("<tr></tr>").append($("<td>温度：</td><td>" + value.temperature + "</td>")).appendTo(fCell);
                        $("<tr></tr>").append($("<td>风况：</td><td>" + value.wind + "</td>")).appendTo(fCell);

                        $("#future").append(fCell);
                    });
                }else{
                    $("#error").css("display", "block");
                }
            },
            error: function(request, errInfo, errObj) {
                $("#error").css("display", "block");
            }
        });
    });
});