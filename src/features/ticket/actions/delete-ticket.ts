"use server";

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (ticketId: string) => {
  return prisma.ticket.delete({
    where: {
      id: ticketId,
    },
  });
};
