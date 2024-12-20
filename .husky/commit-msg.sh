#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

commit_msg=$(cat $1)
MAX_LINES=1000
lines=$(git diff --cached --numstat | awk '{ total += $1 + $2 } END { print total }')
if [ "$lines" -gt "$MAX_LINES" ]; then
    echo "提交的代码行数${lines}超过${MAX_LINES}行，请检查提交内容。"
    exit 1
fi

if [ -z "$commit_msg" ] then
 echo "错误：提交信息不能为空"
 exit 1
fi

if ! echo "$commit_msg" | grep -qE '^[[:space:]]*\[TS修改单编号/效能任务编号\][[:space:]]*[:：][[:space:]]*T[0-9]{12}(-[0-9]+)?([[:space:]]*,[[:space:]]*T[0-9]{12}(-[0-9]+)?)?$'; then
    echo "错误：提交信息必须包含任务单号，格式为[TS修改单编号/效能任务编号]:T202412176666,多个任务单请用英文逗号隔开"
    exit 1
fi

exit 0
