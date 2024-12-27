#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
# commit 提交校验每次commit代码行数，校验提交信息任务单填写的合规性
# 1、校验一次提交代码行数不能超过1000，2、校验任务单号必填，任务单号格式
# 获取commit信息
commit_msg=$(cat $1)
MAX_LINES=1000
# 获取本次提交的代码行数
lines=$(git diff --cached --numstat | awk '{ total += $1 + $2 } END { print total }')
# 判断提交代码行数是否超过1000
if [ "$lines" -gt "$MAX_LINES" ]; then
    echo "提交的代码行数${lines}超过${MAX_LINES}行，请检查提交内容。"
    exit 1
fi
# 校验提交commit信息是否为空
if [ -z "$commit_msg" ] then
 echo "错误：提交信息不能为空"
 exit 1
fi
# 校验任务单是否必填及填写是否合规
# 正则表达式匹配说明如下：
# ^：表示字符串的开始
# [[:space:]]*：匹配0个或多个空白字符
# \[TS修改单编号/效能任务编号\]：匹配字符串 [TS修改单编号/效能任务编号]
# [:：]：匹配中英文冒号
# T[0-9]{12}：匹配以T开头后面连接12个数字的字符串
# (-[0-9]+)?：匹配可选的连接符-后面连接至少一个数字的字符串，？表示可有可无
# $：表示字符串的结束
if ! echo "$commit_msg" | grep -qE '^[[:space:]]*\[TS修改单编号/效能任务编号\][[:space:]]*[:：][[:space:]]*T[0-9]{12}(-[0-9]+)?([[:space:]]*,[[:space:]]*T[0-9]{12}(-[0-9]+)?)?$'; then
    echo "错误：提交信息必须包含任务单号，格式为[TS修改单编号/效能任务编号]:T202412176666,多个任务单请用英文逗号隔开"
    exit 1
fi

exit 0
