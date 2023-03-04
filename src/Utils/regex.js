export const regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// regex explanation:
// ^                 # start-of-string
// (?=.*[a-z])       # a lowercase letter must occur at least once
// (?=.*[A-Z])       # an uppercase letter must occur at least once
// (?=.*\d)          # a digit must occur at least once
// (?=.*[@$!%*?&])   # a special character must occur at least once
// .{8,}             # anything, at least eight places though
