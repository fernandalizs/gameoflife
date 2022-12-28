<template>
    <div class="board">
        <h1>Jogo da Vida de Conway</h1>
        <table>
            <tr v-for="(line, l) in grid" :key="l">
                <td v-for="(cell, c) in line" :key="c" :class="{alive: cell == 1}"></td>
            </tr>
        </table>
    </div>
</template>
<script>
function _count_neighboors_alive (i, j, grid) {
    const [M, N] = [grid.length, grid[0].length]
    const delta_coord = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1],
    ]
    let coord_neighboors = []
    for (let k = 0; k < delta_coord.length; k++) {
        coord_neighboors.push([i + delta_coord[k][0], j + delta_coord[k][1]])
    }
    let coord_neighboors_alive = coord_neighboors.filter((e) => e[0] >= 0 && e[0] < M && e[1] >= 0 && e[1] < N && grid[e[0]][e[1]] == 1)
    return coord_neighboors_alive.length
}
function _nextState(grid) {
    const [M, N] = [grid.length, grid[0].length]
    let newGrid = new Array(M)
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            let neighboorsAlive = _count_neighboors_alive(i, j, grid)
            if (grid[i][j] == 1) {
                if (neighboorsAlive == 2 || neighboorsAlive == 3) {
                    newGrid[i][j] = 1
                } else {
                    newGrid[i][j] = 0
                }
            } else {
                if (neighboorsAlive == 3) {
                    newGrid[i][j] = 1
                }
            }
        }
    }
    return newGrid
}

export default {
data() {
    return {
        grid: [
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ]
    }
},
methods: {
    turnAlive() {
        this.grid = _nextState(this.grid)
    },
},
mounted() {
    setInterval(() => {
        this.turnAlive()
    }, 1200)
}
}
</script>
<style scoped>
    table {
        margin-right: auto;
        margin-left: auto;
    }
    td {
        border: 1px solid #000;
        width: 28px;
        height: 28px;
    }
    .alive {
        background-color: #5b5bed;
    }
</style>