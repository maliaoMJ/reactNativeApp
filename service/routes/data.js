const express = require('express');
const router = express.Router();
const xss = require('xss');
const fs = require('fs');
const PATH = './public/data/';
const COUNT = 50;

/* 数据接口API */
//阅读数据接口 适用于公共端
router.get('/read',(req,res,next)=>{
    let type = req.param('type') || '';
    fs.readFile(PATH+type+'.json',(err,data)=>{
        if(err){
            return res.send({
                status:0,
                info:'读取数据失败！'
            });
        }
        let obj = [];
        try{
        obj=JSON.parse(data.toString())
        }catch(e){
            obj = [];
        }
        if(obj.length>COUNT){
            obj = obj.slice(0,COUNT)
        }
        return res.send({
            status:1,
            data:obj
        });

    })
});
//数据的存储 后台开发PC 站点使用
router.get('/write',(req,res,next)=>{
    if(!req.session.user){
        return res.render('noAccess',{})
    }
    let type = xss(req.param('type')) || '';
    let url = xss(req.param('url')) || '';
    let title = xss(req.param('title')) || '';
    let img = xss(req.param('img')) || '';
    if(!type || !url || !title || !img ){
        return res.send({
            status:0,
            info:'提交信息不全。。。。'
        })
    }
    let objItem ={
        img:img,
        url:url,
        title:title,
        id:guidGenerate(),
        time:new Date()

    };
    fs.readFile(PATH+type+'.json',(err,data)=>{
        if(err){
            return res.send({
                status:0,
                info:'读取数据失败！'
            });
        }
        let arr = JSON.parse(data.toString());
        arr.splice(0,0,objItem);
        let newData = JSON.stringify(arr);
        //写入重新组合的数据newData
        fs.writeFile(PATH+type+'.json',newData,(err)=>{
            if(err){
                return res.send({
                    status:0,
                    info:'写入文件失败！'
                })
            }
            return res.send({
                status:1,
                info:`写入文件成功{objItem}`
            })
        })


    })
});
/*阅读模块控制写入接口 后台PC站点使用*/
router.post('/write_config',(res,req,next)=>{
    if(!req.session.user){
        return res.render('noAccess',{})
    }
    let data = req.boy.data;//表单提交过来的数据
    try{
        let objConfigItem = JSON.parse(data);
        let newConfigData = JSON.stringify(objConfigItem);
        //写入文件 -----不是追加写入，而是重新写入
        fs.writeFile(PATH+'config.json',newConfigData,(err)=>{
           if(err){
               return res.send({
                   status:0,
                   info:'数据无法写入文件！'
               });
           }
           return res.send({
               status:1,
               info:`config 配置文件写入成功！{newConfigData}`
           });
        });
    }catch(e){
        return res.send({
            status:0,
            info:'数据格式不合法！无法转换成JSON或者系统出错，数据无法写入文件！'
        });
    }


});
/*登录接口*/
router.post('/login',(req,res,next)=>{
    let userName = xss(req.body.username);
    let userPassword= xss(req.body.password);
    if(userName==="admin"&&userPassword==="123456"){
        req.session.user={
            userName:userName
        };
        return res.send({
            status:1,
            info:'登录成功！'
        });
    }
    return res.send({
        status:0,
        info:'登录失败！'
    });
});
//guid 生成唯一ID
function guidGenerate() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).toUpperCase();
}

module.exports = router;
