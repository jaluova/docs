---
title: 广度优先搜索
icon: 'material-symbols-light:arrow-range-rounded'
createTime: 2025/03/02 14:04:38
permalink: /algorithm/bfs/
---

```cpp
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

int main() {
  int T = 2;
  while (T--) {
    auto vis = vector(25, vector(25, 0));
    queue<pair<int, int>> q;
    int x, y;
    cin >> x >> y;
    vector<int> dir[12] = {{2, 2}, {2, -2}, {-2, 2}, {-2, -2},
                           {1, 2}, {-1, 2}, {1, -2}, {-1, -2},
                           {2, 1}, {-2, 1}, {2, -1}, {-2, -1}};
    auto bfs = [&]() {
      vis[x][y] = 1;
      q.emplace(x, y);
      while (!q.empty()) {
        auto [u, v] = q.front();
        q.pop();
        for (auto row : dir) {
          int nx = u + row[0];
          int ny = v + row[1];
          if (nx <= 0 || ny <= 0) continue;
          if (nx > 20 || ny > 20) continue;
          if (nx == x && ny == y) continue;
          if (!vis[nx][ny]) {
            vis[nx][ny] = vis[u][v] + 1;
            q.emplace(nx, ny);
          }
          if (nx == 1 && ny == 1) return vis[nx][ny];
        }
      }
      return 0;
    };
    cout << bfs() - 1 << endl;
  }
}
```