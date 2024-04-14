package org.business.commonservice.exception.custom;

public class NotFoundException extends RuntimeException {
    public NotFoundException() { super(); }
    public NotFoundException(String error) { super(error); }
}
