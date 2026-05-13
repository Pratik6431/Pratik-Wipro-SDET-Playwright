enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Guest = "GUEST"
}

const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};


function checkPermission(role: Role) {
  const hasAccess = PermissionMap[role];
  
  if (hasAccess) {
    console.log(`Access Granted for: ${role}`);
  } else {
    console.log(`Access Denied for: ${role}`);
  }
}

console.log("--- Role Permission Check ---");
checkPermission(Role.Admin);
checkPermission(Role.Guest);