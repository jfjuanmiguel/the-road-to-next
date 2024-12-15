import { Ticket } from "@/features/ticket/types";
import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
  return prisma.ticket.findMany();
};
