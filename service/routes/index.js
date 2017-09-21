const express = require('express');
const router = express.Router();
const fs = require('fs');
const PATH = './public/data/';

/* GET home page. */
router.get('/', (req, res, next)=>{
    if(!req.session.user){
     return res.render('noAccess',{})
    }
  res.render('index', { title: 'Welcoome To ReactNative APP' });
});
//登录页面
router.get('/login',(req,res,next)=>{
  res.render('login',{});
});
//推荐页面
router.get('/recommend',(req,res,next)=>{
    if(!req.session.user){
        return res.render('noAccess',{})
    }
  res.render('recommend',{});
});
//编辑页面
router.get('/edit',(req,res,next)=>{
    if(!req.session.user){
        return res.render('noAccess',{})
    }
   let type = req.query.type;
   if(type){
       let obj = {};
       switch (type){
           case 'sanwen':
               obj = {};
               break;
           case 'it':
               obj = {};
               break;
           case 'manager':
               obj = {};
               break;
           case 'cookies':
               obj = {};
               break;
           default :
               return res.send({
                   status:0,
                   info: '参数错误'
               });
               break;
       }
       fs.readFile(PATH + type + '.json', (err, data) => {
           if (err) {
               return res.send({
                   status:0,
                   info: '读取文件失败！'
               });
           }
           let obj = JSON.parse(data.toString());
           return res.render('edit', {
               data: obj
           });
       });
   }else{
     return res.send({
         status:0,
         info:'参数错误！'
     });
   };

});
//公共的地图数据视图
router.get('/map',(req,res,next)=>{
   res.render('map',{

   });
})
router.get('/weather',(req,res,next)=>{
 res.render('weather',{});
});

module.exports = router;
