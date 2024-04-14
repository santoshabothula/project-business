package org.business.commonservice.exception;

import org.business.commonservice.dto.ErrorDTO;
import org.business.commonservice.exception.custom.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class NotFoundExceptionHandler extends RuntimeException {

    @ExceptionHandler(NotFoundException.class)
    protected ResponseEntity<ErrorDTO> handleNotFoundException(RuntimeException ex) {
        return ResponseEntity.internalServerError().body(
                ErrorDTO.builder().errorCode(ex.getMessage()).build()
        );
    }
}
