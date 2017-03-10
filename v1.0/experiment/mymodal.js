/*
 * 基于jQuery开发的模态框插件
 * 
 * 需要保存的数据 为后期的完善做准备
 * options = {
 *     type: {0:'加载层',1:'提示框',2:'询问框',3:'tip层',4:'页面层',5:'iframe层'}
 * }
 *  
 */

;!function(win,$,undefined){
 // 第一步，各自为政
var modal = {}
// 加载层
    modal.load = function(type){
        type = type || '';
        var mask = '<div class="modal-mask"></div>';
        var loadUi = '<div class="modal-box modal-load'+ type +'-box"><div class="modal-load"></div></div>';
        $('body').append(mask).append(loadUi);
    }
// 提示框
    modal.alert = function(content){
        content = content || 'This is alert!!!';
        var mask = '<div class="modal-mask"></div>';
        var loadUi = '<div class="modal-box modal-alert-box"><div class="modal-title">信息</div><div class="moadl-content">'+ content +'</div><span class="moadl-colse">&times;</span></div>';
        $('body').append(mask).append(loadUi);
    }



    win.modal = modal;

}(window,jQuery);