/*global $:false, Handlebars:false*/
(function(w){
    w.pads = function(){
        var _renderTemplate = function(id, data){
            var source = $(id).html();
            var template = Handlebars.compile(source);
            $('div.table').append(template(data));
        };
        var _getData = function(cb) {
            $.ajax({
                dataType: "json",
                url: '/api',
                success: function(data){
                    cb(data);
                }
            });
        };
        return {
            render: _renderTemplate,
            data: _getData
        };
    };
}(window));


var pads = pads();
pads.data(function(data){
    var users = {
        users: data
    };
    pads.render("#table", users);
});