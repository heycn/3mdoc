import cac from "cac"

const cli = cac("3mdoc").version("0.0.1").help()
cli.command("dev [root]", "start dev server").action(async (root: string) => {
  console.log("dev", root)
})

cli.parse()