module.exports = ({
type: "ready",
code: `
$setGlobalUserVar[UserRole;Owner;$getVar[OwnerID]]
`
})
