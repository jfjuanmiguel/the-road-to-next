import { Ticket } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const getTickets = async (): Promise<Ticket[]> => {
  return prisma.ticket.findMany();
};
