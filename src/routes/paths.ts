// ------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/dashboard",
};

// ------------------------------------------------------------

export const paths = {
  auth: {
    login: `${ROOTS.AUTH}/login`,
    register: `${ROOTS.AUTH}/register`,
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    invoice: {
      root: `${ROOTS.DASHBOARD}/invoice`,
      create: `${ROOTS.DASHBOARD}/invoice/create`,
    },
    credit: {
      root: `${ROOTS.DASHBOARD}/credit`,
      history: `${ROOTS.DASHBOARD}/credit/history`,
    },
    template: {
      root: `${ROOTS.DASHBOARD}/template`,
    },
    member: {
      root: `${ROOTS.DASHBOARD}/member`,
    },
    account: {
      root: `${ROOTS.DASHBOARD}/account`,
    },
  },
};
