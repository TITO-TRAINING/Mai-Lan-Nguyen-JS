/* Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
####### */
let string = "";
for (let i = 0; i < 7; i++) {
  string += "#";
  console.log(string + "\n");
}