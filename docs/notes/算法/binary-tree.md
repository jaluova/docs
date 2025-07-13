---
title: 二叉树的遍历
icon: 'simple-icons:deepl' 
createTime: 2025/03/16 12:06:58
permalink: /algorithm/oxo75cd5/
---

```cpp
#include <iostream>
#include <queue>
#include <stack>
#include <vector>

using namespace std;

struct node {
  int l;
  int r;
};
// 根据先序遍历序列和中序遍历序列推断二叉树
int main() {
  int n;
  cin >> n;
  vector<node> tree(n + 1);
  vector<int> fa(n + 1), place(n + 1);
  vector<int> right[n + 1], left[n + 1];

  vector<int> pre(n + 1), mid(n + 1);
  for (int i = 1; i <= n; i++) {
    cin >> mid[i];
    place[mid[i]] = i;
  }
  for (int i = 1; i <= n; i++) cin >> pre[i];

  int root = pre[1];
  int cur;
  for (int i = 1; i <= n; i++) {
    fa[mid[i]] = root;
    if (i < place[root]) left[root].push_back(mid[i]);
    if (i > place[root]) right[root].push_back(mid[i]);
  }
  for (int i = 2; i <= n; i++) {
    cur = pre[i];
    int y = fa[cur];
    if (place[cur] < place[y])
      tree[y].l = cur;
    else
      tree[y].r = cur;

    for (auto x : (place[cur] < place[y]) ? left[y] : right[y]) {
      fa[x] = cur;
      if (place[x] < place[cur]) left[cur].push_back(x);
      if (place[x] > place[cur]) right[cur].push_back(x);
    }
  }

  // 层序遍历
  queue<int> q;
  q.push(root);
  while (!q.empty()) {
    cur = q.front();
    q.pop();
    cout << cur << ' ';
    auto [l, r] = tree[cur];
    if (r) q.push(r);
    if (l) q.push(l);
  }
}

// for (int i = 1; i <= n; i++) {
//   auto& [l, r] = tree[i];
//   cin >> l >> r;
// }

// 先序遍历
// stack<int> s;
// cur = root;
// do {
//   if (!s.empty()) {
//     cur = s.top();
//     s.pop();
//   }
//   cout << cur << ' ';
//   auto [l, r] = tree[cur];
//   if (r) s.push(r);
//   if (l) s.push(l);
// } while (!s.empty());
```