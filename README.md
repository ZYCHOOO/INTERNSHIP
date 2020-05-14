# 前端实习
##### 最近实习的第一个项目上线了，有一点空闲时间，记录一下一个月来的坑。先记录一下git吧，还是一个团队项目开发中比较常见的。
2020/05/13-切换分支/拉取代码/合并代码/切换仓库  
2020/05/14-上传代码
---
## 关于git的各种操作
+ ***切换分支***  
首先要先明白各种分支的目的：就实习的这个项目而言（dev/dev-deploy/release）dev所对应的就是日常编写代码的分支；dev-deploy所对应的就是测试环境分支；release所对应的就是上线后的代码分支  
`git checkout branch-name`

+ ***提交代码***  
当代码编写完成后，需要提交到仓库  
```
git add . //相当于stage all differences
git commit -m 'your message' // 说起commit貌似有一个commit规范
git push
```

+ ***拉取代码***  
在项目中有可能落后于整个项目的进度，此时就需要我们拉取代码  
`git pull`

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


## 常见的问题  
+ ***切换仓库***  
虽然到现在为止只实习了一个月，但切换仓库还真让我碰上了，写着写着就连不上报错，就很迷惑  
```
git remote -v  // 查看远端地址
git remote  //查看远端仓库名
git remote set-url origin 仓库地址名
```
+ ***我已经commit但未push，现在需要撤回操作***  
问题的描述如上，解决办法如下
```
git log // 此时会打开提交记录
git reset ID // 通过上面找到的ID
```


