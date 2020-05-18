# 前端实习
##### 最近实习的第一个项目上线了，有一点空闲时间，记录一下一个月来的坑。先记录一下git吧，还是一个团队项目开发中比较常见的。
2020/05/13-切换分支/拉取代码/合并代码/切换仓库  
2020/05/14-开始项目/上传代码/常见的问题  
2020/05/18-本地创建新的分支/创建新的远程分支
---
## 关于git的基本操作
+ ***开始项目***  
开始项目了，我们要从仓库中将整个项目放到本地。我们以这个demo为例，首先我们要找到clone，复制地址  
![clone](https://github.com/ZYCHOOO/INTERNSHIP/blob/master/src/assets/images/clone.png)  
```
git clone [url]  
```

+ ***切换分支***  
其次要先明白各种分支的目的：就实习的这个项目而言（dev/dev-deploy/release）dev所对应的就是日常编写代码的分支；dev-deploy所对应的就是测试环境分支；release所对应的就是上线后的代码分支  
```
git checkout branch-name
```

+ ***提交代码***  
当代码编写完成后，需要提交到仓库  
```
git add . //相当于stage all differences
git commit -m 'your message' // 说起commit貌似有一个commit规范
git push
```

+ ***拉取代码***  
在项目中有可能落后于整个项目的进度，此时就需要我们拉取代码  
```
git pull
```

+ ***合并代码***  
分支间的代码进度会有所出入，此时需要进行合并代码  
```
//在dev分支中合并dev-deploy的代码  
git checkout dev  
git merge dev-deploy  

//在dev-deploy分支中合并dev的代码
git checkout dev-deploy
git merge dev
```

+***本地创建新的分支/创建新的远程分支***  
```
// 从已有的分支上创建一个新的分支
git checkout -b branch-name
// 创建新的远程分支
git push --set-upstream origin branch-name
```


## 常见的问题  
+ ***切换仓库***  
虽然到现在为止只实习了一个月，但切换仓库还真让我碰上了，写着写着就连不上报错，就很迷惑  
```
git remote -v  // 查看远端地址
git remote  //查看远端仓库名
git remote set-url origin [url]
```
+ ***我已经commit但未push，现在需要撤回操作***  
问题的描述如上，解决办法如下  
```
git log // 此时会打开提交记录
```  
![gitlog](https://github.com/ZYCHOOO/INTERNSHIP/blob/master/src/assets/images/gitLog.jpg)
```
git reset ID // 通过上面找到的ID
```  

+ ***代码出错但是上传了***  
修改代码时部分代码出错了没有发现，但是已经上传了，对仓库造成了污染.这个时候需要在本地回滚版本以及在仓库强制回滚版本；昨天就碰到了（尴尬），是本人造成的（流下了菜鸡的泪水）  
```
// 本地回滚版本  
git log // 打开提交记录找到需要回滚的ID  
git reset --hard ID  

// 仓库强制回滚版本
git push -f
```



