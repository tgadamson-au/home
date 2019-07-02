Thomas Adamson
==============

statistics
bioinfomatics


github
coursera
edx
kaggle
jsfiddle
codepen
hackerrank
exercism
codecademy
codewars
rosalind
datacamp

```{r}
n <- 200; xmin <- 0; xmax <- 1; ymin <- 0; ymax <- 2
sample <- data.frame(x = runif(n, xmin , xmax ), 
                y = runif(n, ymin , ymax))

with(sample, plot(x, y, asp = 1, col = 'blue'))
rect(xmin, ymin, xmax, ymax, border = 'red')

# Load the spatstat package
library(spatstat)

# Create this many points, in a circle of this radius
n_points <- 300
radius <- 10

# Generate uniform random numbers up to radius-squared
r_squared <- runif(n_points, 0, 100)
angle <- runif(n_points, 0, 2*pi)

# Take the square root of the values to get a uniform spatial distribution
x <- r_squared^.5 * cos(angle)
y <- r_squared^.5 * sin(angle)

png("radius10sample.png")
plot(disc(radius), border = 'red', lwd = 2, main="disc(radius), radius = 10") 
points(x, y, col = 'blue')
dev.off()

ListEnvironment <- function(){
  lapply(ls(), get)
}

SaveList <- function(list){
  save(list, file = deparse(substitute(list)))
}

scp [-Cr] /some/file [ more ... ] host.name:/destination/file


##Datacamp spatstat 1.4

##Set coordinates and window
ppxy <- ppp(x = x, y = y, window = disc(radius))

# Test the point pattern
qt <- quadrat.test(ppxy)

# Inspect the results
plot(qt)

```

