import { Ticket } from "@/features/ticket/types";
import { prisma } from "@/lib/prisma";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  return prisma.ticket.findUnique({
    where: {
      id: ticketId,
    },
  });
};
