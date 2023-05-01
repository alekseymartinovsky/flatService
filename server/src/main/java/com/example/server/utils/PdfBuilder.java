package com.example.server.utils;

import com.example.server.entity.*;
import com.example.server.model.Amenities;
import com.example.server.model.Manager;
import com.example.server.model.RentFlat;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import org.apache.pdfbox.io.IOUtils;

import java.io.*;
import java.util.stream.Stream;

public class PdfBuilder {

    private Font font;
    private BaseFont baseFont;
    private Font headerFont;

    public PdfBuilder() throws DocumentException, IOException {
        this.baseFont = BaseFont.createFont("c:/windows/fonts/times.ttf", "Cp1251", BaseFont.EMBEDDED);
        this.font = new Font(baseFont, 12);
        this.headerFont = new Font(baseFont, 18, Font.BOLD, BaseColor.BLACK);
    }

    public Document createPDFfromRentFlat(FlatEntity flat, ByteArrayOutputStream out) throws IOException, DocumentException {
        Document document = new Document();
        PdfWriter.getInstance(document, out);

        document.open();

        String headerText = "";
        if(flat instanceof RentFlatEntity){
            headerText = "Объявление об аренде квартиры";
        }else{
            headerText = "Объявление о продаже кваритры";
        }

        Paragraph header = new Paragraph(headerText, headerFont);
        header.setAlignment(Element.ALIGN_CENTER);
        header.setSpacingAfter(20f);

        Paragraph description = new Paragraph(flat.getFlatInfoEntity().getDescription(), font);
        description.setSpacingBefore(20f);
        description.setSpacingAfter(20f);

        Paragraph amenities = new Paragraph("", font);
        if(flat instanceof RentFlatEntity){
            String str = "Удобства: " + Amenities.getAmenitiesString(((RentFlatEntity) flat).getAmenities());
            amenities.add(str);
            amenities.setSpacingAfter(20f);
        }

        document.add(header);
        insertFlatInfo(document, flat.getFlatInfoEntity());
        document.add(description);
        document.add(amenities);

        for(FlatImageEntity path : flat.getFlatImageEntities()){
            Image image = Image.getInstance("src/main/resources/static/images/" + path.getName());
            image.scaleToFit(620, 360);
            document.add(image);
        }

        document.close();
        return document;
    }

    private void insertFlatInfo(Document document, FlatInfoEntity flatInfo) throws DocumentException {
        PdfPTable table = new PdfPTable(2);
        addTableHeader(table);
        addRows(table, "Город", flatInfo.getCity());
        addRows(table, "Улица", flatInfo.getStreet());
        addRows(table, "Дом", flatInfo.getHouse());
        addRows(table, "Квартира", flatInfo.getFlat());
        addRows(table, "Площадь", flatInfo.getSquare().toString());
        addRows(table, "Ремонт", flatInfo.getRepair());
        addRows(table, "Количество комнат", flatInfo.getRooms().toString());
        addRows(table, "Этаж", flatInfo.getFloor().toString());
        document.add(table);
    }

    private void addTableHeader(PdfPTable table) {
        Stream.of("Параметры квартиры", "Значения")
                .forEach(columnTitle -> {
                    PdfPCell header = new PdfPCell();
                    header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                    header.setBorderWidth(2);
                    header.setPhrase(new Phrase(columnTitle, font));
                    table.addCell(header);
                });
    }

    private void addRows(PdfPTable table, String value1, String value2) {
        table.addCell(new PdfPCell(new Phrase(value1, font)));
        table.addCell(new PdfPCell(new Phrase(value2, font)));
    }

}
