import time
import pygame
import numpy

COLOR_BACKGROUND = (0, 0, 0)
COLOR_GRID = (110, 110, 110)
COLOR_DYING = (174, 97, 250)
COLOR_ALIVE = (124, 0, 247)

pygame.init()
pygame.display.set_caption("Jogo da Vida - Fernanda Liz")


def update(screen, cells, size, progress=False):
    update_cells = numpy.zeros((cells.shape[0], cells.shape[1]))

    for row, col in numpy.ndindex(cells.shape):
        alive = numpy.sum(cells[row-1:row+2, col-1:col+2]) - cells[row, col]
        color = COLOR_BACKGROUND if cells[row, col] == 0 else COLOR_ALIVE

        if cells[row, col] == 1:
            if alive < 2 or alive > 3:
                if progress:
                    color = COLOR_DYING
            elif 2 <= alive <= 3:
                update_cells[row, col] = 1
                if progress:
                    color =  COLOR_ALIVE
        else:
            if alive == 3:
                update_cells[row, col] = 1
                if progress:
                    color = COLOR_ALIVE

        pygame.draw.rect(screen, color, (col * size, row * size, size - 1, size - 1))

    return update_cells


def main():
    pygame.init()
    screen = pygame.display.set_mode((1000, 800))

    cells = numpy.zeros((100, 120))
    screen.fill(COLOR_GRID)
    update(screen, cells, 10)

    pygame.display.flip()
    pygame.display.update()

    running = False

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    running = not running
                    update(screen, cells, 10)
                    pygame.display.update()
            if pygame.mouse.get_pressed()[0]:
                pos = pygame.mouse.get_pos()
                cells[pos[1] // 10, pos[0] // 10] = 1
                update(screen, cells, 10)
                pygame.display.update()

        screen.fill(COLOR_GRID)

        if running:
            cells = update(screen, cells, 10, progress=True)
            pygame.display.update()
        
        time.sleep(0.001)


if __name__ == '__main__':
    main()